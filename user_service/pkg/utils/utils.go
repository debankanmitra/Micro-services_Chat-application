// unmarshaling json that receive from the request , helps especially in the create function
// "Parse data" means that you take some raw data and put a specific meaning into the data

// => Marshalling is the process of transforming data structures or objects in a programming language into a JSON-encoded string
// so that it can be transmitted across a network or stored in a file. This is often done using a function or library that takes the
// data structure as input and outputs a JSON-encoded string.

// => Unmarshalling is the reverse process of taking a JSON-encoded string and transforming it into a data structure or object in a
// programming language. This is often done using a function or library that takes the JSON-encoded string as input and outputs a data structure or object.
package utils

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

func ParseBody(r *http.Request, x struct{}) {
	if body, err := io.ReadAll(r.Body); err == nil {
		if err := json.Unmarshal(body, &x); err != nil {
			log.Fatal(err)
		}
	}
}
