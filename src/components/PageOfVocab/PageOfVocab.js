import { InfoContext } from '../../InfoProvider'
import React, { useContext } from 'react'
import { usePath } from 'hookrouter';
import './PageOfVocab.css'
import { IndividualVocab } from '../IndividualVocab';
import { A } from 'hookrouter';

export function PageOfVocab() {
    const {
        state: {
            items
        },
        markAsStudied
    } = useContext(InfoContext);
    const path = usePath();
    const idFromPath = parseInt(path[path.length - 1], 10)
    return (
        <div id="vocab-page" title="vocab">
            <div id="vocab-page__title">
                {
                    items.map((item) => {
                        if (item.id === idFromPath) return <h1>{item.title}</h1>
                    })
                }
            </div>
            {
                items.map((item) => {
                    if (item.id === idFromPath) return <IndividualVocab {...item.vocabulary} />
                })
            }
            <div id="vocab-page__button-box">
                <A href="/"><h1 id="vocab-page__button" onClick={markAsStudied(idFromPath)}>All done!</h1></A>
            </div>
        </div>
    );
}


                        // {
                //     items.map((item) => {
                //         if (item.id === idFromPath) return <p>{item.title}</p>
                //     })
                // }