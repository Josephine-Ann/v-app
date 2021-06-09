import React from 'react'
import firebase from './Config/firebase';

const db = firebase.firestore()

export const InfoContext = React.createContext();

export class InfoProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            isLoaded: false,
            testDataFB: [],
            now: Date.now(),
            items: [{
                vocabulary: [
                    {
                        english: "hi",
                        spanish: "hola",
                    },
                    {
                        english: "how are you?",
                        spanish: "¿cómo estás?",
                    },
                    {
                        english: "what's up?",
                        spanish: "¿qué pasa?",
                    },
                    {
                        english: "nice to meet you",
                        spanish: "encantado/a",
                    },
                ],
                category: 1,
                lastStudied: 1620718672093,
                timesStudied: 3,
                title: 'Greetings',
                id: 4
            },
            {
                vocabulary: [
                    {
                        english: "happy",
                        spanish: "contento",
                    },
                    {
                        english: "sad",
                        spanish: "triste",
                    },
                    {
                        english: "angry",
                        spanish: "enfadado",
                    },
                    {
                        english: "worried",
                        spanish: "preocupado",
                    },
                ],
                category: 1,
                lastStudied: 1620718600151,
                timesStudied: 3,
                title: 'Feelings',
                id: 3
            },
            {
                vocabulary: [
                    {
                        english: "chair",
                        spanish: "silla",
                    },
                    {
                        english: "table",
                        spanish: "mesa",
                    },
                    {
                        english: "cupboard",
                        spanish: "armario",
                    },
                    {
                        english: "oven",
                        spanish: "horno",
                    },
                ],
                category: 2,
                lastStudied: 1620718600100,
                timesStudied: 3,
                title: 'Furniture',
                id: 2
            },
            {
                vocabulary: [
                    {
                        english: "t-shirt",
                        spanish: "camiseta",
                    },
                    {
                        english: "jumper",
                        spanish: "sudadera",
                    },
                    {
                        english: "sock",
                        spanish: "media",
                    },
                    {
                        english: "sleeve",
                        spanish: "manga",
                    },
                ],
                category: 3,
                lastStudied: 1620718600000,
                timesStudied: 3,
                title: 'Clothes',
                id: 1
            }]
        };
    }

    toggleIt = async () => {
        if (this.state.toggle) {
            this.setState({
                toggle: false
            })
        } else {
            this.setState({
                toggle: true
            })
        }
    }




    getInfo = async () => {
        let allArticles = []
        db.collection('first').get().then(docs => {
            if (!docs.empty) {
                docs.forEach(function (doc) {
                    const article = {
                        id: doc,
                        ...doc.data()
                    }
                    allArticles.push(article)
                })
                this.setState({
                    testDataFB: allArticles
                })
            }
        })
        // this.setState({
        //     isLoaded: true
        // })
    }


    markAsStudied = async (id) => {
        this.state.items.forEach((item) => {
            if (item.id === id) {
                this.setState = {
                    lastStudied: Date.now()
                }
            }
        })
    }


    componentDidMount() {
        this.getInfo();
    }


    render() {
        return (
            <InfoContext.Provider
                value={{
                    state: this.state,
                    markAsStudied: this.markAsStudied,
                    toggleIt: this.toggleIt
                }}>
                {!this.state.loading ? this.props.children : "Loading List..."}
            </InfoContext.Provider>
        );
    }
}

export default InfoContext;