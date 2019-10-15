# Hyperspace 3D (Beta)
*"Traveling through hyperspace ain't like dusting crops, boy! Without precise calculations we could fly right through a star or bounce too close to a supernova, and that'd end your trip real quick, wouldn't it?"*

Well, with this library we have taken care of the calculations to make it abit easier for you.

**Hyperspace 3D** adds another dimension to your site. It simply enables for scrolling on the z-axis, making for an immersive experience. Instead of going down along the page like normal, we go into it.

**Accesibility is key.** This projects does NOT use any WebGL or canvas. This is basic HTML, CSS and JS. All content will be indexable by the search engines and screen readers.

## :scroll: Instructions
**Install:** 
Add hyperspace-3d to your project. Choose one of the following.
- `yarn add hyperspace-3d`<br/>
- `npm install hyperspace-3d --save`<br/>

**Basic usage:**
Javascript
```
import Hyperspace3D from 'hyperspace-3d'

const options = {
    space: 100,
    snap: {
        enable: true,
        front: 10,
        back: 5,
    },
    blur: {
        enable: true,
        amount: 40,
    }
}

Hyperspace3D(options)
```
HTML
```
<main class="hyperspace">
    <div class="hyperspaceContainer">
        <div class="hyperspaceScene">
            <section>
                <h1>Custom HTML</h1>
                <p>Your own HTML goes inside the section tags.</p>
            <section>
            <section>
                <p>Add as many sections as you want.</p>
            </section>
        </div>
    </div>
</main>
```

---

## :raised_hands: Contribute
You are very welcome to contribute to the project.

#### Developer installation
1. Clone this project from git, in terminal run `git clone https://github.com/martinlundin/hyperdrive`
1. In terminal go to the project root and run `npm install`

### :snail: Roadmap
| Version    | Estimated release | Status
| :--------: | ----------------- | :----:
| 0.0.1      | 2019-10-16        | :soon:
| 0.1.0      | 2019-10-20        | :x:

#### Feature status

##### Version 0.0.1
| Status             | Description
| :----------------: | ----------------
| :white_check_mark: | Create basic documentation
| :soon:             | Create development enviroment
| :soon:             | Create minimal viable prototype

##### Version 0.1.0
| Status             | Description
| :----------------: | ----------------
| :x:                | Add options functionality
| :x:                | Add space option functionality
| :x:                | Add blur option functionality
| :x:                | Add snap option functionality
| :x:                | Add demo
| :x:                | Add CDN hosting

---

#### Previous version features
