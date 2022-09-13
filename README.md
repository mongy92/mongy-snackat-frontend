# mongy-snackat-frontend

### Description

A Demo App for using `Context` as state management for cart data and actions 

- add item to cart
- remove item from
- increment item quantity
- decrement item quantity
- calculate `totalPrice` based on items on the cart


### Screen record

https://user-images.githubusercontent.com/13261643/190023971-f2966ac7-f088-44ac-9ee9-df03bb008f4b.mp4


### Screen shots

<p float='left'>
<img src="https://user-images.githubusercontent.com/13261643/190023098-62b87028-1d1a-4660-a5fb-6d1f47bd5034.png"  height="700">
<img src="https://user-images.githubusercontent.com/13261643/190023125-49d44a08-4a98-41a7-8d6f-7d4d5f238732.png"  height="700">
<p/>


### Used API 

products : https://fakestoreapi.com/products
    
    
### Main technologies used

- [React Native + typescript](https://reactnative.dev/docs/typescript)
- [React Query](https://tanstack.com/query/v4)
- [Tailwind](https://www.nativewind.dev/)


## Prerequisites

- React Native CLI to be installed.
- Simulator or emulator to run the app on.


### Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

`git clone https://github.com/mongy92/mongy-snackat-frontend`

Second run the following command to install project dependencies:

`yarn install`

**in IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- `cd ios && pod install`


### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.


### Used dependencies

```json
    "@tanstack/react-query": "^4.3.4",
    "classnames": "^2.3.2",
    "nativewind": "^2.0.10",
    "react": "18.1.0",
    "react-native": "0.70.0"
```




