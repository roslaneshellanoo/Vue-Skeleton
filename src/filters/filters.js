//
// filters.js
//
function filterBy(list, value) {
    return list.filter(function(item) {
        return item.indexOf(value) > -1;
    });
}

function findBy(list, value) {
    return list.filter(function(item) {
        return item == value
    });
}

function reverse(value) {
    return value.split('').reverse().join('');
}

function escapehtml(text) {

    let entityRE = /[&<>]/g;

    function escapeEntity(entity) {
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
        };
        return entityMap[entity];
    }

    return String(text).replace(entityRE, escapeEntity);
}

export {filterBy, reverse, findBy, escapehtml}