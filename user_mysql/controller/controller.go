package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"msql/model"

	"github.com/gorilla/mux"
)

func GetUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "GET")
	params := mux.Vars(r)
	//ID, _ := strconv.Atoi(params["id"])
	userdetail := model.Read(params["id"])

	// throwing json values
	json.NewEncoder(w).Encode(userdetail)

}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "POST")

	var user model.User
	json.NewDecoder(r.Body).Decode(&user)
	model.Create(&user)
	fmt.Println("user crearted")
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "DELETE")

	params := mux.Vars(r)
	//, _ := strconv.Atoi(params["id"])

	model.Delete(params["id"])
	fmt.Println("user DELETED")
}

// We will do update by deleting and creating a new user
func UpdateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "PUT")

	params := mux.Vars(r)
	//ID, _ := strconv.Atoi(params["id"])

	model.Delete(params["id"])

	var user model.User
	json.NewDecoder(r.Body).Decode(&user)
	model.Create(&user)
	fmt.Println("user updated")
}
