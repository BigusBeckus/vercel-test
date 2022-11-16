package handler

import (
	"fmt"
	"net/http"
)

// I don't know GO
func Handler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if len(name) == 0 {
		name = "Dave"
	}
	fmt.Fprintf(w, fmt.Sprintf("Hello %s from the Golang file.", name))
}
