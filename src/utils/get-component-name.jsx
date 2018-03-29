
export default Component => {

    if (!Component) {
        return ''
    }

    return Component.displayName
        || Component.name
        || 'NotSet'
}
