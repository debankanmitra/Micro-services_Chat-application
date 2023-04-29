package main

import (
	"fmt"
	"log"
	"net/http"
	"userservice/pkg/routes"
)

func main() {
	r := routes.Route()

	fmt.Println("SERVER IS STARTED")
	log.Fatal(http.ListenAndServe(":4000", r))
}
