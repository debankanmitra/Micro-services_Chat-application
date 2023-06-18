package model

import (
	"userservice/pkg/config"

	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

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
	database.AutoMigrate(&Friends{})
}

// CRUD functions of database
func Read() *Friends {
	var user *Friends
	database.Find(&user)
	return user
}

func Create(user *Friends) *Friends { // it will be create bcuz we will be actually saving creating
	database.Create(user)
	return user
}

func Delete(id string) *Friends { // this is fine too
	var user *Friends
	database.Where("Userid= ?", id).Delete(&user)
	return user
}
