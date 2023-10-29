import React from "react";
import Navbar from "../components/navbar";
import Project from "../components/Project";
 
const Projects = () => {
    const critter = () => {
        return (
            <div id="experiences">
                <p>In this project, I developed a simulation for the evolution of 'critters'. Critters are entities which are governed by a program. 
                This program is written in a simple (but Turing complete!) 
                <a href="https://www.cs.cornell.edu/courses/cs2112/2022fa/project/project.pdf?1668394201"> language </a>, which defines their actions in each timestep of the world. 
                Critters are able to reproduce, both asexually and with each other, and offspring are given programs which inherit characteristics 
                from those of their parent(s), modulo some mutations. The implementation consisted of a couple main components: </p>
                <h3>Building a Parser and AST</h3>
                <p>
                    The first step of the process was being able to execute the language governing critter actions. This involved building a 
                    recursive-descent parser (the language being LL0) to parse programs into an abstract syntax tree. Designing an abstract syntax
                    tree was both tricky and fulfilling: first, we needed to fully represent the expressivity of the language grammar. We also needed
                    to design it in a way such that subsequent manipulations and traversals was easy. One of the biggest decisions to make was the 
                    question of mutability: we eventually decided the improved efficiency of a mutable AST was worth the tradeoff of an easier-to-avoid-bugs 
                    functional paradigm. 
                </p>
                <h3>Implementing Fault Injection</h3>
                <p>To simulate mutation of genomes, I performed fault injection on the critter program ASTs. Fault injection is a method of mutating 
                    programs by introducing errors in order to test whether a system can withstand error conditions. While we were using it for a different purpose in This
                    project, it was super informative to learn about a software testing technique. 
                </p>
                <h3>Creating an Interpreter</h3>
                <p>In order to execute critter programs, we wrote an interpreter. This was implemented as a visitor pattern on our AST 
                    node types. 
                </p>
                <h3>Tying it Off With World Simulation and Building a GUI</h3>
                Finally, we implemented simulation logic which tracked world state. A world is an environment which can contain any number of 
                critters who can walk around on a hex grid, eat, reproduce, attack each other, and die. The GUI was implemented with JavaFX 
                and an executable jar can be found on the Github linked above. Check it our if you're interested!
            </div>
        )
    }

    const compiler = () => {
        return(
            <div id="experiences">
                <p>In this project, I developed an optimizing compiler targeting x86 for the language 
                    <a href="https://www.cs.cornell.edu/courses/cs4120/2023sp/project/language.pdf"> Eta </a>. Eta is a C-like language, with features such as 
                primitive ints and bools, record types, and arbitrary array types, standard control flow features, recursive functions, and multiple returns. </p>
                <h3>Creating a Lexer and Parser</h3>
                <p>We began by developing a lexer and parser. We made use of Java's JFlex and Cup (lexer and parser generator, respectively). 
                    The lexer generation consisted of determining a regex encapsulating the language specification. The parser generation 
                    consisted of determining a CFG (context free grammar) capturing (no more and no less) than the language spec's expressivity. 
                    Unlike in the previous project, this language was more complicated and required a more powerful and complex parser (hence
                    the use of a generator). 
                </p>
                <h3>Translating to an Intermediate Representation</h3>
                <p>A compiler can be thought of as translating a high level language which produces a deeply nested AST into straight line assembly. 
                    Going from a potentially very tall tree to a linear program in one pass is difficult: therefore, most compiler implementations
                    make use of a translation to an IR, which can be thought of as a representation somewhere in between the original language and 
                    assembly in terms of complexity. An IR will still be system agnostic, and constitutes the last part of what is referred to as the 
                    frontend of the compiler (original language specific, system agnostic). Conversely, the backend of the compiler is the part which
                    is IR and system dependent, but original language agnostic. Our translation was done via a pattern match on the node types of our AST. 
                </p>
                <h3>Translation to x86 Assembly</h3>
                <p>
                    With a tree of our IR, we were finally ready to translate into assembly. This had two major challenges: first, tiling. Tiling 
                    refers to picking an x86 instruction for a given IR construct: there are often many choices (some of which are better). Picking 
                    the best possible instruction is a tremendous task given the complexity of x86 itself: therefore, we made the decision to support
                    a given subset of the language, assigned costs to each, and did an optimal tiling using the subset in order to balance compilation 
                    time and execution time. The second challenge was implementing calling conventions: in this project, we used a modified 
                    <a href="https://wiki.osdev.org/System_V_ABI"> System V </a>
                    calling convention set (in order to support arbitrary multiple returns, which is not specified in the original calling conventions). 
                </p>
                <h3>Implementing Optimizations and Efficient Register Allocation</h3>
                <p>
                    In this project, we implemented a number of optimizations. These included conditional constant propagation, constant folding, 
                    dead code elimination, move coalescing, and loop invariant code motion. We also implemented graph-coloring based register 
                    allocation. 
                </p>
            </div>
        )
    }

    const sokoban = () => {
        return (
            <div id="experiences">
                <p>In this project, we developed a <a href="https://en.wikipedia.org/wiki/Sokoban#:~:text=Sokoban%20(%E5%80%89%E5%BA%AB%E7%95%AA%2C%20S%C5%8Dko%2D,A%20Sokoban%20puzzle%20being%20solved."> Sokoban </a> inspired game. In a classic Sokoban game, a single player is in a maze-like 
                    grid environment. There are a number of boxes that they must push onto goal spots. Our interpretation introduces another
                    level of complexity: here, we imagine multiple levels (grids) stacked on top of each other with boxes that may span multiple
                    dimensions. Therefore, pushing a box in one level also pushes it in another, and levels must be solved simultaneously. 
                    <h3>Implementing Basic Functionality and a Terminal UI</h3>
                    <p>
                        This was my first time programming with OCaml and with any functional language at all, actually. As such, the beginning of this 
                        project was especially tough. Although there were some aspects (such as the UI) where we inevitably had to program imperatively, 
                        we tried very hard to keep all the core logic in pure functional structure. Completely immutable data structures, no side effects, 
                        completely independently testable functions made for a very different development workflow than I was used to. It also brought 
                        pleasant benefits: lack of mutability meant I had much higher initial correctness than I expected. Our terminal based UI was 
                        implemented with the help of a library called Lambda-Term. As we went, we also wrote a primarily randomly generated test suite. 
                    </p>
                    <h3>Creating a Campaign</h3>
                    <p>
                        Funnily enough, we realized fairly early on we could barely solve our own puzzles. Randomly generated solvable levels were 
                        amazingly difficult to solve by hand, and so we decided to implement 'campaigns', or sets of puzzles which progressively 
                        grow in difficulty. This way, our users would be able to learn world quirks / techniques in isolation before needing to use
                        them in more complicated situations. 
                    </p>
                    <h3>Improving our UI</h3>
                    <p>
                        Finally, we developed a full UI using the library OCaml Graphics. We also added on some more fun game features such as magic grass 
                        which are like portal squares which move a player from one level to another. The additional compelxity from new features 
                        allowed us to create more interesting campaigns. 
                    </p>
                </p>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className="projectsContainer">
                <Project width={450} link={require('../images/crit.png')} title={"Evolution Simulation"} 
                    caption={critter()} 
                    url={"https://github.com/estherwang01/critterworldInfo"}
                    tech={["Java", "JavaFX"]} />
                <Project width={450} link={require('../images/compiler.png')} 
                    title={"Optimizing Compiler"} url={"https://github.coecis.cornell.edu/jjx6/CS4120_compiler"} 
                    caption={compiler()}tech={["Kotlin", "JFlex", "Cup", "x86", "System V"]} />
                <Project width={450} link={require('../images/sokoban.png')} title={"Simultaneous Sokoban"}  url={"https://github.coecis.cornell.edu/apf75/sokoban"} caption={sokoban()}tech={["OCaml", "OCaml Graphics", "Lambda-Term"]} />
            </div>
            {/* <EmphasisText text='sample text' /> */}
        </div>
    );
};
 
export default Projects;