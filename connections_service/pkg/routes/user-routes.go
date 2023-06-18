package routes // DONE

import (
	"userservice/pkg/controller"

	"github.com/gorilla/mux"
)

var Route = func() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/connections", controller.GetConnections).Methods("GET")
	router.HandleFunc("/api/add/{id}", controller.AddConnection).Methods("PUT")
	router.HandleFunc("/api/connections/{id}", controller.DeleteConnection).Methods("DELETE")

	return router
}
