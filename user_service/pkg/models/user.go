package models

import (
	"userservice/pkg/config"

	"gorm.io/gorm"
)

var (
	database *gorm.DB
)

type User struct {
	ID            uint   `gorm:"primaryKey"`
	Uuid          string `gorm:"not null" json:"Uuid"`
	Name          string `gorm:"" json:"Name"`
	ProfilePic    string
	Email         string `gorm:"unique;not null" json:"Email"`
	EmailVerified bool   `gorm:"not null" json:"EmailVerified"`
	DarkMode      bool   `gorm:"not null" json:"DarkMode"`
}

func init() {
	config.Connect()
	database = config.GetDB()
	database.AutoMigrate(&User{})
}
