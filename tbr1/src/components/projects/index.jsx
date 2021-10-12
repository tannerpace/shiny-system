import React from 'react'

export default function Projects() {
    return (
        <div>
            <section id="projects" class="projects-section">
                <h2 class="projects-section-header">These are some of my projects</h2>

                <div class="projects-grid">
                    <a href="https://tannerpace.github.io/crispy-couscous/" target="_blank" class="project project-tile" rel="noreferrer">
                        <img class="project-image" src="images/typer.png" alt="project" />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            Typing Test
                            <span class="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a href="https://www.youtube.com/embed/HIsTgGAJVZ4" target="_blank" class="project project-tile" rel="noreferrer">
                        <img class="project-image" src="images/Screen Shot 2021-09-25 at 2.25.22 PM.png " alt="project" />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            Parts Store
                            <span class="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a href="https://tannerpace.github.io/Todo-React/" target="_blank" class="project project-tile" rel="noreferrer">
                        <img class="project-image" src="images/todosmall.png" alt="project" />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            Time To Todo App
                            <span class="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a href="https://singlepage.d1zqi00jmrlymq.amplifyapp.com/#page-top" target="_blank" rel="noreferrer"
                        class="project project-tile">
                        <img class="project-image" src='images/airautooffset.png' alt="project" />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            Airautonomo Business
                            <span class="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a href="./pages/shapley.html" target="_blank" class="project project-tile">
                        <img class="project-image" src="images/shapely.png" alt="project" />
                        <p class="project-title">
                            <span class="code">&lt;</span>
                            Tribute Page To Lloyd Shapley
                            <span class="code">&#47;&gt;</span>
                        </p>
                    </a>

                </div>

            </section>
        </div>
    )
}
