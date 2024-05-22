import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let submittedValues = {};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const main = true;
    res.render("index.ejs", {
        alertMessage: null,
        main: main,
    });
});

app.post("/submit", (req, res) => {
    const main = true;
    const titlei = req.body["title"]
    const Blogp = req.body["Blog"]

    if (Blogp === "" && titlei === "") {
        const alertMessage = "Both title and blog cannot be empty";
        res.render("index.ejs", { main: main, alertMessage: alertMessage });
    } else {
        submittedValues = { titleb: titlei, Blogpara: Blogp };
        const main = false;
        res.render("index.ejs", {
            main: main,
            titleb: titlei,
            Blogpara: Blogp,
        });
    }
});
app.post("/edit", (req, res) => {
    const main = true;
    const { titleb, Blogpara } = submittedValues;
    res.render("index.ejs", {
        main: main,
        titlepl: titleb,
        placeholder: Blogpara,
    });
});

app.post("/delete", (req, res) => {
    const main = true;
    res.render("index.ejs", {
        main: main,
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});