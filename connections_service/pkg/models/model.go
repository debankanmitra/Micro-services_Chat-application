package model

import (
	"userservice/pkg/config"

	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

type User struct {
	ID       uint   `gorm:"primaryKey"`
	Userid   string `gorm:"not null" json:"Userid"`
	Friendid string `gorm:"not null" json:"Friendid"`
	Name     string `gorm:"" json:"Name"`
	Pic      string
	Chatid   string `gorm:"not null" json:"Chatid"`
}

func init() {
	database = config.Connect()
	database.AutoMigrate(&User{})
}

// CRUD functions of database
func Read() *User {
	var user *User
	database.Find(&user)
	return user
}

func Create(user *User) *User { // it will be create bcuz we will be actually saving creating
	database.Create(user)
	return user
}

func Delete(id string) *User { // this is fine too
	var user *User
	database.Where("Uuid= ?", id).Delete(&user)
	return user
}
