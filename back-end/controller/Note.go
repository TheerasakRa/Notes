package controller

import (
	"net/http"

	"notes/config"
	"notes/models"

	"fmt"

	"github.com/gin-gonic/gin"
)

func GetDatanote(c *gin.Context) {
	Datanote := []models.Note{}
	config.DB.Find(&Datanote)
	c.JSON(http.StatusOK, &Datanote)
}

func GetIdDatanote(c *gin.Context) {
	id := c.Param("id")
	getid_datanote := []models.Note{}
	if result := config.DB.Where("id = ?", id).Find(&getid_datanote); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, &getid_datanote)
}

func PostNote(c *gin.Context) {
	var new_DataNote models.Note
	c.BindJSON(&new_DataNote)
	config.DB.Create(&new_DataNote)
	c.JSON(http.StatusOK, &new_DataNote)
}

func DeleteNote(c *gin.Context) {
	id := c.Param("id")
	delete_dataNote := []models.Note{}
	if result := config.DB.Where("id = ?", id).Delete(&delete_dataNote); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &delete_dataNote)
}

func UpdateNote(c *gin.Context) {
	var update_datanote models.Note
	id := c.Params.ByName("id")
	if err := config.DB.Where("id = ?", id).First(&update_datanote).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	}
	c.BindJSON(&update_datanote)
	config.DB.Save(&update_datanote)
	c.JSON(http.StatusNoContent, update_datanote)
}
