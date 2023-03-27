const findMatching = (drivers, string) => {
    let filteredDrivers = drivers.filter((driver) => {
        return driver.toLowerCase() === string.toLowerCase();
    });
    return filteredDrivers
};

const fuzzyMatch = (array, string) => {
   let matchArray = array.filter((subj) => {
        let cutPoint = subj.length - (subj.length - string.length);
        return string === subj.slice(0, cutPoint);
    });
    return matchArray;
};

const matchName = (drivers, string) => {
    let nameArray = drivers.filter((driver) => {
        return string === driver.name;
    });
    return nameArray;
};