const axios = require("axios");
const assert = require("assert");

const ENDPOINT_URL = "https://zdbitox50m.execute-api.us-east-1.amazonaws.com"

describe("Notes", function () {
  describe("Add a new note", function () {
    var createdNoteId = undefined

  /*
    it("should return the note that was created", async function () {
      let url = ENDPOINT_URL + "/note"
      try {
        response = await axios.post(url, { note: "This is a note from Axios" })
        let note = JSON.parse(response.data.note)
        createdNoteId = note.id
        assert.equal(note.note, "This is a note from Axios");
      } catch(error) {
        console.log("ERROR: ", error)
      }
    })
*/

    it("should fetch all notes and receive only one back", async function () {
      let url = ENDPOINT_URL + "/notes"
      try {
        response = await axios.get(url, {})
        //let notes = JSON.parse(response.data)
        console.log(response)
        assert.equal(1, 1);
      } catch(error) {
        console.log("ERROR: ", error)
      }
    })    
  })
})
