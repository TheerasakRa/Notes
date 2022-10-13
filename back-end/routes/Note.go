package routes

import (
	"notes/controller"
	"github.com/gin-gonic/gin"
)

func NoteRoute(router *gin.Engine) {
	router.GET("/note", controller.GetDatanote)
	router.GET("/note:id", controller.GetIdDatanote)
	router.POST("/note", controller.PostNote)
	router.DELETE("/note:id", controller.DeleteNote)
	router.PUT("/note:id", controller.UpdateNote)

}
