class News {
    constructor() {
        this.title = null;
        this.description = null;
        this.html = null;
    }
    get title() { return this.title; }
    get description() { return this.title; }
    set title(aTitle){this.title=aTitle;}
    set description(aDesc){this.description=aDesc;}
    form(id) {
        let inputTitle = document.createElement("input");
        let inputDescription = document.createElement("input");
        inputTitle.id = "title";
        inputDescription.id = "desc";
        let add = document.createElement("a");
        add.addEventListener("click", function(){
            let aNews = new News();
            aNews.title = inputTitle.value;
            aNews.description = inputDescription.value;
         /*   document.getElementById("titre").value,
                             document.getElementById("desc").value
                             );*/
        })
        let inner = document.getElementById(id);
        inner.appendChild(inputTitle);
        inner.appendChild(inputDescription);
        inner.appendChild(add);
    }
}

/*
  <input type="text" id="titre" />
                <input type="text" id="desc" />
                <a href="#" onclick='new News(document.getElementById("titre").value,
                             document.getElementById("desc").value
                             );'>Add news</a>
                             */