package controllers

import (
	"encoding/json"
	"net/http"
	"userservice/pkg/models"

	"github.com/gorilla/mux"
)

func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "POST")
	var user *models.User
	json.NewDecoder(r.Body).Decode(&user)

	models.Create(user)

}
func FetchUserByID(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "GET")
	params := mux.Vars(r)
	userdetail, _ := models.Read(params["id"])

	// throwing json values
	json.NewEncoder(w).Encode(userdetail)

}
func UpdateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "PUT")
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "DELETE")
}
