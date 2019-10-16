# Hyperspace 3D (Alpha)
*"Traveling through hyperspace ain't like dusting crops, boy! Without precise calculations we could fly right through a star or bounce too close to a supernova, and that'd end your trip real quick, wouldn't it?"*

Well, with this library we have taken care of the calculations to make it abit easier for you.

**Hyperspace 3D** adds another dimension to your site. It simply enables for scrolling on the z-axis, making for an immersive experience. Instead of going down along the page like normal, we go into it.

**Accesibility is key.** This projects does NOT use any WebGL or canvas. This is basic HTML, CSS and JS. All content will be indexable by the search engines and screen readers.

## :scroll: Instructions
**The project is currently in Alpha phase, report any bugs you might find. Please don't use in production yet, unless you keep up with the development.**

**Install:** 
Add hyperspace-3d to your project. Choose one of the following.
- `yarn add hyperspace-3d`<br/>
- `npm install hyperspace-3d --save`<br/>

**Basic usage:**
Javascript
```
import Hyperspace3D from 'hyperspace-3d'

const options = {

}

Hyperspace3D(options)
```
HTML
```
<div id="hs">
    <div hs="container">
        <div hs="scene">
            <section>
                <h1>Custom HTML</h1>
                <p>Your own HTML goes inside the section tags.</p>
            </section>
            <section>
                <p>Add as many sections as you want.</p>
            </section>
            <section>
                <img src="https://loremflickr.com/320/240" />
            </section>
        </div>
    </div>
</div>
```

---

## :raised_hands: Contribute
You are very welcome to contribute to the project.

#### Developer installation
1. Clone this project from git, in terminal run `git clone https://github.com/martinlundin/hyperdrive`
1. In terminal go to the project root and run `npm install`
1. To run developer mode with demo `npm run dev` or `yarn dev`
1. When you are finnished with the new version `npm run build` or `yarn build`

### :snail: Roadmap
| Version    | Estimated release | Status
| :--------: | ----------------- | :----:
| 0.0.1      | 2019-10-16        | :white_check_mark:
| 0.1.0      | 2019-10-20        | :soon:

#### Feature status

##### Version 0.1.0
| Status             | Description
| :----------------: | ----------------
| :soon:             | Add space option functionality
| :soon:             | Add blur option functionality
| :soon:             | Add snap option functionality
| :soon:             | Add demo
| :soon:             | Add CDN hosting

---

#### Previous version features
##### Version 0.0.1
| Status             | Description
| :----------------: | ----------------
| :white_check_mark: | Create basic documentation
| :white_check_mark: | Create development enviroment
| :white_check_mark: | Create minimal viable prototype
| :white_check_mark: | Add option & config functionality
