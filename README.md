<h1 align="center">
	Hyperspace
</h1>
<h3 align="center">
  Activate the third dimension
</h3>

---

## :speech_balloon: Information
**Hyperspace 3D** adds another dimension to your site. It simply enables for scrolling on the z-axis, making for an immersive experience. Instead of going down along the page like normal, we go into it.

**Accesibility is key.** This projects does NOT use any WebGL or canvas. This is basic HTML, CSS and JS. All content will be indexable by the search engines and screen readers.

**<a href="https://fokusiv.com">See example of usage</a>**

## :scroll: Instructions
**The project is currently in Alpha phase, report any bugs you might find. Please don't use in production yet, unless you keep up with the development.**

**Install:** 
Add **hyperspace-3d** to your project. Choose one of the following.
- `yarn add hyperspace-3d`<br/>
- `npm install hyperspace-3d --save`<br/>

**Basic usage:**
Javascript
```js
import Hyperspace3D from 'hyperspace-3d'

Hyperspace3D()
```
Note, if you use a framework remember to call the Hyperspace3D after the HTML is rendered, **example for React**
```js
React.useEffect(()=> {
  Hyperspace3D()
}, [])
```

HTML
```html
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

**Advanced Usage:**
```js
 const options = {
    space: {
      amount: 50, // How much the space between sections are. 1-100
      extra: 'auto', // Space after last element. 'auto' detect if element is last, then it is false, otherwise true
    },
    bound: {
      padding: 100, // Padding of bound, in pixels. This is to prevent element sticking if user scrolls away fast
    },
    blur: {
      active: true,
      amount: 10, // How much the blur is. 0-inf
      hq: true, // This solves ClearType pixel problem, makes content hq. Unfortunately it is pretty process intense
      offset: 0.9, // Offset for when hq kicks in
    },
    opacity: {
      active: true,
      amount: 1, // How much opacity between 0-1
    },
  };
  const selector = "#custom-id"
  Hyperspace3D(options, selector)
```

---

## :raised_hands: Contribute
You are very welcome to contribute to the project.

#### Developer installation
1. Clone this project from git, in terminal run `git clone https://github.com/martinlundin/hyperdrive`
1. In terminal go to the project root and run `npm install` or `yarn install`
1. To run developer mode with demo `npm run dev` or `yarn dev`
1. When you are finished with the new version `npm run build` or `yarn build`

### :snail: Roadmap
| Version    | Estimated release | Status
| :--------: | ----------------- | :----:
| 0.0.1      | 2019-10-16        | :white_check_mark:
| 0.1.0      | 2019-10-20        | :white_check_mark:
| 0.1.1      | 2020-01-28        | :white_check_mark:
| 0.1.2      | 2020-01-30        | :white_check_mark:
| 0.2.0      | :question:        | :soon:

#### Feature status

##### Version 0.2.0
| Status             | Description
| :----------------: | ----------------
| :white_check_mark: | Set final defaultOptions
| :x:                | Add multiple demos promoting the library
| :x:                | Add CDN hosting

---

#### Previous version features
##### Version 0.1.0
| Status             | Description
| :----------------: | ----------------
| :white_check_mark: | Add space option functionality
| :white_check_mark: | Add blur option functionality
| :white_check_mark: | Add fix for blur pixel bug
| :white_check_mark: | Add opacity option functionality
| :x:                | Add snap option functionality (REMOVED FROM ROADMAP)
| :white_check_mark: | Add demo in project

##### Version 0.0.1
| Status             | Description
| :----------------: | ----------------
| :white_check_mark: | Create basic documentation
| :white_check_mark: | Create development enviroment
| :white_check_mark: | Create minimal viable prototype
| :white_check_mark: | Add option & config functionality
