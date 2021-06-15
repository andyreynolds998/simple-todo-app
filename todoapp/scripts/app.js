var count = 0;

function saveTodo(){
    // read the text from the input field
    let text = $("#todoText").val();
    console.log(text);
    //validations
    if(!text){ //"!" means 'not'. If there is no text, display an error and cancel the input function
        alert("Error: you must type something");
        return; //get out of the function. Return cancels the path through the function
    }

    count+=1;
    $('#countContainer').html(`<p>There are ${count} tasks</p>`);
    let syntax = "<div class='todoItem'>" + text +"<button class='btn btn-sm btn-danger'>🗑️</button> </div>";
    $("#todoContainer").append(syntax);

    //clear the text
    $("#todoText").val('');
    $("#todoText").focus(); //focus keeps the input field selected so you can keep typing without clicking on input field
}

function init(){
    console.log("todo app");
    $('#countContainer').html(`<p>There are ${count} tasks</p>`);
    //load the data

    //hook events
    $("#btnSave").click(saveTodo);
    $("#todoText").keypress(function(args){
        if(args.key == "Enter"){
            saveTodo();
        }
    });

    $("#todoContainer").on('click','.btn-danger',function() {
        console.log("Removing item");
        $(".todoItem").remove(); //'this' is calling to the button. make the function delete the todo item by calling to parent.
        count=count-1;
        $('#countContainer').html(`<p>There are ${count} tasks</p>`);
    });
}
window.onload = init;

//homework is line 33 and 39, and investigate css flexbox
//create a count of todo items