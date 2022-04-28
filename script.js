/* SCRIPT DOS BOTÕES SUPERIORES */

const btn3 = document.getElementsByClassName(".botao3")

    function visitGithub(){
    
    if (confirm("Ir para Github?")) {
        window.open("https://github.com/alexlpsdev",'blank').focus;

    } else {
        console.log("Redirecionamento cancelado.");
        alert("Redirecionamento cancelado.")
    }

};


const btn2 = document.getElementsByClassName(".botao2")

    function sendEmail(){

    if (confirm("Deseja enviar um email?")) {
       window.open("mailto:alexlucasxp@outlook.com");

    } else {
        console.log("Redirecionamento cancelado.")
        alert("Redirecionamento cancelado")

    }

};


const btn1 = document.getElementsByClassName(".botao1")

function redirect(){

    if (confirm("Ir ao perfil do Instagram?")) {
        window.open("https://instagram.com/alexlucasdev",'blank').focus

    } else {
        console.log("Redirecionamento cancelado.")
        alert("Redirecionamento cancelado.")

    }

};




// SCRIPT DA ToDo LIST


        // Script da adição da tarefa
document.querySelector('#push').onclick = function (){

    if(document.querySelector('#newtask input').value.length == 0){
        alert("Por favor, insira uma tarefa.")
        console.log("Insira uma tarefa.");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">

            <input type="checkbox" class="checkbox"/>
            
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>

                <button class="delete">
                <i class="fa fa-trash"></i>
                </button>

            </div>
        `;


        // Exclusão de tarefas
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                console.log("Tarefa removida.")
            }
        }


        // Marcação de conclusão das tarefas
    var tasks = document.querySelectorAll(".task");
            Array.from(tasks).forEach(tasks => tasks.addEventListener('change', function(){
             // this.parentNode.classList.toggle('completed');
                console.log("Parabéns! Você concluiu a tarefa!");
            }));


        // Adição das tarefas
        document.querySelector("#newtask input").value = ""
            console.log("Tarefa adicionada.");
    }
}        



    // Pre-Load

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
    alert("Mini projeto JavaScript - Criado por: Alex Developer");
    console.log("Seja muito bem-vindo(a)!");
});
