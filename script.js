var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

var artImg = document.getElementById("artImg");
var artBox = document.getElementById("artBox");

let form = document.getElementById("form");

var ArtData = [
  {
    id: "art-1",
    src: "img/art1.jpg",
    name: "Preventing and Reducing Marine Pollution: Key Initiatives for Achieving SDG 14 'Life Below Water'",
    desc: "Preventing and reducing marine pollution is a critical aspect of achieving SDG 14, Life Below Water. Marine pollution, particularly from land-based activities, poses severe threats to ocean health, marine life, and human communities. We can take initiative for beach clean-ups, marine debris tracking and reporting. Government can help by promoting circular economy approach.",
  },
  {
    id: "art-2",
    src: "img/art2.jpg",
    name: "Addressing Ocean Acidification: Strategies for Mitigating Its Impact on Marine Life and Ecosystems",
    desc: "Ocean acidification is a significant environmental issue caused by the increasing absorption of carbon dioxide (CO₂) by the world's oceans. This process lowers the pH of seawater, making it more acidic, which can have devastating effects on marine life, ecosystems, and human communities that depend on them. Promoting renewable energy, protecting and restoring marine ecosystem, reducing carbon emission are the strategies to address the effects of ocean acidification.",
  },
  {
    id: "art-3",
    src: "img/art3.jpg",
    name: "Conserving and Sustainably Using Marine Resources: Achieving SDG 14 Life Below Water",
    desc: "Conserving and sustainably using marine resources is a key component of Sustainable Development Goal 14 (SDG 14), Life Below Water. This goal emphasizes the need to protect the oceans, seas, and marine resources from pollution, overfishing, and other harmful practices. MPAs are descignated regions of the ocean where human activities are more strictly regulated to conserve marine ecosystems and biodiversity. Sustainable fishing practice which includesc overfishing. Marine pollution can harm the living organisms. Focusing on these areas can significantly contribute to the conservation and sustainable use of marine resources, ensuring that ocean ecosystems remain healthy and resilient for future generations",
  },
  {
    id: "art-4",
    src: "img/art4.jpg",
    name: "Regulating Fisheries and Ending Overfishing for Sustainable Marine Resources",
    desc: "Regulating fisheries and ending overfishing are critical components of ensuring the long-term sustainability of marine resources. Overfishing not only depletes fish stocks but also disrupts entire marine ecosystems, leading to negative consequences for biodiversity, food security, and livelihoods. we can work toward ending overfishing and ensuring that fisheries are managed in a way that supports both ecological health and the livelihoods of those who depend on the ocean.",
  },
  {
    id: "art-5",
    src: "img/art5.jpg",
    name: "Protecting and Managing Marine and Coastal Ecosystems for Sustainable Future",
    desc: "Protecting and managing marine and coastal ecosystems is essential for maintaining the health of the oceans and the well-being of communities that depend on these environments. Marine and coastal ecosystems, including coral reefs, mangroves, seagrass beds, and estuaries, provide critical services such as food, coastal protection, carbon sequestration, and biodiversity support. Protecting and managing marine and coastal ecosystems require a coordinated effort that involves governments, local communities, scientists, and the private sector. By integrating conservation, sustainable use, and adaptation strategies, we can ensure the resilience and health of these critical ecosystems for generations to come.",
  },
];

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}
function closeFullImg() {
  fullImgBox.style.display = "none";
}

function onDetailClick(elem) {
  let elemId = ArtData.find((item) => item.id === elem);

  console.log(elemId);

  artImg.src = elemId.src;
  artBox.style.display = "flex";
  document.getElementById("artName").innerHTML = elemId.name;
  document.getElementById("artDesc").innerHTML = elemId.desc;
}

function closeArticle() {
  artBox.style.display = "none";
}
