var formfield = document.getElementById("formfield");
      function add() {
        var newfield = document.createElement("input");
        newfield.setAttribute("type", "text");
        newfield.setAttribute("name", "text");
        newfield.setAttribute("class", "text");
        newfield.setAttribute("placeholder", "Optional Field");
        formfield.appendChild(newfield);
      }
      function remove() {
        var input_tags = formfield.getElementsByTagName("input");
        if (input_tags.length > 2) {
          formfield.removeChild(input_tags[input_tags.length - 1]);
        }
      }