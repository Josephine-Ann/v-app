import './MainPage.css'
import { InfoContext } from '../../InfoProvider'
import React, { useContext } from 'react'
import { TimeSlots } from '../TimeSlots';

export function MainPage() {
    const {
        state: {
            items,
            testDataFB,
            now
        },
    } = useContext(InfoContext);
    return (
        <div title="" id="main-page">
            <div className="main-page__section">
                <div className="main-page__section-tostudy">
                    <h1 className="main-page__title-tostudy">To study</h1>
                    {
                        items.map((list) => {
                            if (list.category === 1 && (now - list.lastStudied > 1620777600)) {
                                return <TimeSlots key={list.lastStudied} {...list} />
                            }
                        })
                    }
                </div>
                <div className="main-page__section-studied">
                    <h1 className="main-page__title-studied">Studied</h1>
                    {
                        items.map((list) => {
                            if (list.category === 1 && (now - list.lastStudied < 1620777600)) {
                                return <TimeSlots key={list.lastStudied} {...list} />
                            }
                        })
                    }
                </div>
            </div>
            <div className="main-page__section">
                <div className="main-page__section-tostudy">
                    <h1 className="main-page__title-tostudy">To study</h1>
                    {
                        items.map((list) => {
                            if (list.category === 2 && (now - list.lastStudied > 2403632329600)) {
                                return <TimeSlots key={list.timestamp} {...list} />
                            }
                        })
                    }
                </div>
                <div className="main-page__section-studied">
                    <h1 className="main-page__title-studied">Studied</h1>
                    {
                        items.map((list) => {
                            if (list.category === 2 && (now - list.lastStudied < 2403632329600)) {
                                return <TimeSlots key={list.timestamp} {...list} />
                            }
                        })
                    }
                </div>
            </div>
            <div className="main-page__section">
                <div className="main-page__section-tostudy">
                    <h1 className="main-page__title-tostudy">To study</h1>
                    {
                        items.map((list) => {
                            if (list.category === 3 && (now - list.lastStudied > 72108988800)) {
                                return <TimeSlots key={list.timestamp} {...list} />
                            }
                        })
                    }
                </div>
                <div className="main-page__section-studied">
                    <h1 className="main-page__title-studied">Studied</h1>
                    {
                        items.map((list) => {
                            if (list.category === 3 && (now - list.lastStudied < 72108988800)) {
                                return <TimeSlots key={list.timestamp} {...list} />
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}