function genListValve(data) {
    let divList = [];
    startSkeleton(divList,data);
    genIcon(divList,data.attr('card-icon'));
    genTitleContainer(divList,data);
    genSingleValue(divList,data);
    endSkeleton(divList);
    return  {widget: divList.join('')};
}