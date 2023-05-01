package main

import (
	"fmt"
	"log"
	"msql/controller"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/api/user/{id}", controller.GetUser).Methods("GET")
	router.HandleFunc("/api/crtuser", controller.CreateUser).Methods("POST")
	router.HandleFunc("/api/user/{id}", controller.DeleteUser).Methods("DELETE")
	router.HandleFunc("/api/user/{id}", controller.UpdateUser).Methods("PUT")

	handler := cors.Default().Handler(router)
	fmt.Println("SERVER IS STARTED")
	log.Fatal(http.ListenAndServe(":4001", handler))
}
