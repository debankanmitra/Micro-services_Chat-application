package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	model "userservice/pkg/models"
	//"github.com/gorilla/mux"
)

// func GetConnections(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("content-Type", "application/x-www-form-urlencode")
// 	w.Header().Set("Allow-Control-Allow-Methods", "GET")
// 	//params := mux.Vars(r)
// 	userdetail := model.Read()
// 	json.NewEncoder(w).Encode(userdetail)

// }

func AddConnection(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-Type", "application/x-www-form-urlencode")
	w.Header().Set("Allow-Control-Allow-Methods", "POST")
	var user model.Addpeoples
	json.NewDecoder(r.Body).Decode(&user)
	model.Create(&user)
	fmt.Println("user crearted")
}

// func DeleteConnection(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("content-Type", "application/x-www-form-urlencode")
// 	w.Header().Set("Allow-Control-Allow-Methods", "DELETE")
// 	params := mux.Vars(r)
// 	//, _ := strconv.Atoi(params["id"])
// 	model.Delete(params["id"])
// 	fmt.Println("user DELETED")
// }
