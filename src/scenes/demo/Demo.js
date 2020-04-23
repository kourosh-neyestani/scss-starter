import React, { Fragment } from 'react'

const demos = [
    {
        link: 'home-1',
        image: 'home-1.jpg',
        title: 'Home 1',
        subtitle: 'Subtitle 1'
    },
    {
        link: 'home-2',
        image: 'home-2.jpg',
        title: 'Home 2',
        subtitle: 'Subtitle 2'
    },
    {
        link: 'home-3',
        image: 'home-3.jpg',
        title: 'Home 3',
        subtitle: 'Subtitle 3'
    }
]

function Demo() {
    return (
        <Fragment>
            <section className="section theme-preview-demos">
                {demos.map((value, index) => (
                    <div key={index}>
                        <a rel="noopener noreferrer" href={`/${value.link}`}>
                            <h1>{value.title}</h1>
                            <p>{value.subtitle}</p>
                            <hr/>
                        </a>
                    </div>
                ))}
            </section>
        </Fragment>
    )
}

export default Demo