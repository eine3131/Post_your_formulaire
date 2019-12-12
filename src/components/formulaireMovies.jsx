import React, {Component} from 'react';


class FormulaireMovies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title : '',
            poster : '',
            comment : ''
         };
         this.onChange = this.onChange.bind(this);
         this.submitForm = this.submitForm.bind(this);
    }


    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    
    submitForm(e) {
        // a mettre tjors dans le submitform
        e.preventDefault();

        const url = "https://post-a-form.herokuapp.com/api/movies/";
        
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(this.state),
        };
        
        
        fetch(url, config) 
        //.then(console.log)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Film ajouté avec l'ID ${res.title}!`);
            }
        })
        .catch(e => {
            console.error(e);
            alert("Erreur lors de l'ajout d'un film");
        });
    }
    


    render() {
        return (
            <div>
                <h1>Mon film préféré</h1>
                
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations :</legend>
                        <div className="form-data">
                            <label htmlFor="name">Title :</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="text">Url :</label>
                            <input
                                type="text"
                                id="url"
                                name="poster"
                                value={this.state.poster}
                                onChange={this.onChange}
                                />
                        </div>

                        <div className="form-data">
                            <label htmlFor="text">Comment :</label>
                            <input
                                type="textarea"
                                id="comment"
                                name="comment"
                                value={this.state.comment}
                                onChange={this.onChange}
                            />
                        </div>
                        
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
            
        );
    }
}

export default FormulaireMovies;