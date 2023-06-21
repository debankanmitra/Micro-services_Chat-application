package model

import (
	"userservice/pkg/config"

	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

type Addpeoples struct {
	ID       uint   `gorm:"primaryKey"`
	Pid      string `gorm:"not null" json:"Pid"`
	Friendid string `gorm:"not null" json:"Friendid"`
	Chatid   string `gorm:"not null" json:"Chatid"`
}

type User struct {
	ID    uint   `gorm:"primaryKey"`
	Uuid  string `gorm:"not null" json:"Uuid"`
	Name  string `gorm:"" json:"Name"`
	Pic   string
	Email string `gorm:"unique;not null" json:"Email"`
}

type Friends struct {
	ID       uint   `gorm:"primaryKey"`
	Userid   string `gorm:"not null" json:"Userid"`
	Friendid string `gorm:"not null" json:"Friendid"`
	Name     string `gorm:"" json:"Name"`
	Pic      string
	Chatid   string `gorm:"not null" json:"Chatid"`
}

func init() {
	database = config.Connect()
	//database.AutoMigrate(&Friends{})
}

// CRUD functions of database

/*
why []Friends : When you pass an empty array as the argument, GORM will populate that array with all the rows
returned by the query. Each row will be represented by a struct instance in the array. By using a array, you can
store and access multiple instances of the struct, allowing you to work with all the retrieved rows of data.
On the other hand, if you were to pass a single pointer instead of an empty array, GORM would only populate that single
struct instance with the first row returned by the query, effectively overwriting it in subsequent iterations.
This would result in you only getting the first row of data and losing the rest.
*/
func Read(Userid string) []Friends {

	var friends []Friends
	database.Find(&friends, "Userid = ?", Userid)
	return friends
}

func Create(user *Addpeoples) *Friends { // it will be create bcuz we will be actually saving creating
	database.Create(user)
	var friends *Friends
	database.Table("users").Select("users.uuid,addpeoples.Friendid,users.name,users.Pic,addpeoples.Pid").Joins("join addpeoples on addpeoples.Friendid = users.uuid").Scan(&friends)

	database.Create(friends)
	return friends
}

// func Delete(id string) *Friends { // this is fine too
// 	var user *Friends
// 	database.Where("Userid= ?", id).Delete(&user)
// 	return user
// }
