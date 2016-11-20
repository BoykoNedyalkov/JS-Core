function main(arr) {
    let rectangles =[];
    for(let [width,height] of arr){
        let rect = createRectangle(width,height);
        rectangles.push(rect)
    }
    rectangles.sort((a,b) => a.compareTo(b))
    return rectangles
    function createRectangle(width,height) {
        let rect ={
            width: width,
            height: height,
            area: () => rect.width*rect.height,
            compareTo: function(other){
                let result = other.area() - rect.area();
                return result || (other.width - rect.width)
            }
        };
        return rect;
    }
}

main([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]])