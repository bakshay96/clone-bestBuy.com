let category_data=[
    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL_88457_flx_stay_fit_DER-a9c718ca-9ea4-4e00-8ce1-e1831fb2e6e8.jpg;maxWidth=220",
        title:"Stay fit and track your progress" 
    },
    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL_88457_flx_eat_well_DER-42599a33-e34f-4f09-8305-05caafc1ae2e.jpg;maxWidth=220",
        title:"Eat well",
    },
    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL_88457_flx_live_clean_2_DER-39140cb6-0688-4314-b8ec-95ddcbb8a537.jpg;maxWidth=220",
        title:"Create a healthy environment",
    },
    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL_88457_flx_connect_to_care_DER-db587a87-fc35-438f-b55e-7eae84da6863.jpg;maxWidth=220",
        title:"Connect to health care",
    },
    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL_88457_flx_look_great_3_DER-8dac81a8-9865-43aa-98f3-3b16255187f4.jpg;maxWidth=220",
        title:"Find your style",
    },
    {
        img:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL_88457_flx_recover_DER-ac1f0073-b491-43cf-9eb2-b9cbd5017f59.jpg;maxWidth=220",
        title:"Recover and recharge",
    },
]



function display(data)
{
    let container=document.getElementById("show-data");
    console.log("display function")
    container.innerHtml=null;
    data.forEach(function(el)
    {
        let div=document.createElement("div");
       div.className="item-div"

        let img=document.createElement("img");
        img.src=el.img;
        img.className="round-img"

        let p=document.createElement("p");
        p.innerText=el.title;
        div.append(img,p);
        console.log(img,p)
        container.append(div)
       
    });
}

display(category_data);