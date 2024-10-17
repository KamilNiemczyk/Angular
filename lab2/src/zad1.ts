
enum Status {
    active = 'active',
    inactive = 'inactive'
}

const processData = (name : string,  age : number,  isActive: boolean, scores: number[], status: Status) => {
    console.log(`Name: ${name}, Status: ${status}`);
    age >= 18 ? console.log('Adult') : console.log('Minor');
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    console.log(`Average score: ${averageScore}`);
}

processData('Pawel', 123, true, [1, 2, 3], Status.active);