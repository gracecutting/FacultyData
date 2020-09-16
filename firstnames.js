var getFirstName = function(name)
{
    return name.firstName;
    }

d3.select("body")
    .selectAll("h2")
    .data(names)
    .enter()
    .append("h2")
    .style("color", "teal")
    .text(getFirstName);