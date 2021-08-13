const myInitObject = {
	profile: 'user'
}

const set = (key, value) => {
	myInitObject[key] = value
}
myInitObject.set = set
export default myInitObject
