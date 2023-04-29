package routes

import (
	"userservice/pkg/controllers"

	"github.com/gorilla/mux"
)

var Route = func() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/api/users/{id}", controllers.FetchUserByID).Methods("GET")
	router.HandleFunc("/api/users", controllers.CreateUser).Methods("POST")
	router.HandleFunc("/api/users/{id}", controllers.UpdateUser).Methods("PUT")
	router.HandleFunc("/api/users/{id}", controllers.DeleteUser).Methods("DELETE")
	return router
}
