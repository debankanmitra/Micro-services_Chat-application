package main // DONE

import (
	"fmt"
	"log"
	"net/http"
	"userservice/pkg/routes"

	"github.com/rs/cors"
)

func main() {
	r := routes.Route()
	handler := cors.Default().Handler(r)
	fmt.Println("SERVER IS STARTED")
	log.Fatal(http.ListenAndServe(":4000", handler))
}
