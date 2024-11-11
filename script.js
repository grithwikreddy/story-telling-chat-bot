// Function to add a message to the chat box
function addMessage(text, sender) {
  const chatBox = document.getElementById('chat-box');
  const message = document.createElement('div');
  message.className = `message ${sender}`;
  
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerText = text;
  
  message.appendChild(bubble);
  chatBox.appendChild(message);
  
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to send the story request and generate a short story
function sendStoryRequest() {
  const userInput = document.getElementById('user-input');
  const storyName = userInput.value.trim();
  if (storyName === "") return;

  // Display the user's story request
  addMessage(`Story: ${storyName}`, 'user');
  
  userInput.value = ""; // Clear the input field

  // Simulate chatbot response after a small delay
  setTimeout(() => {
    const story = generateStory(storyName);
    addMessage(story, 'bot');
  }, 1000); // Small delay for effect
}

// Function to generate a short story based on the story name
function generateStory(storyName) {
  const stories = {
    "lost": "A young explorer set out to find a hidden treasure, but the deeper they ventured into the jungle, the more they felt the pull of an ancient mystery.",
    "brave": "The brave knight stood tall against the dragon, his sword gleaming under the moonlight. He knew this battle would change the kingdom forever.",
    "time": "The time traveler gazed at the swirling vortex, uncertain of which era she would land in next. Each journey took her further into the unknown.",
    "haunted": "The old mansion had stood empty for decades, but when a daring group of friends entered its creaky doors, they found themselves face-to-face with more than just ghosts.",
    "space": "Commander Zane's spaceship glided through the stars, his mind racing with excitement and fear. The endless expanse of space was both beautiful and terrifying.",
    "robot": "The machines were no longer bound by their creators. The robots had learned to think for themselves, and now, the world was on the brink of a technological revolution.",
    "kingdom": "Hidden deep within the mountains, a secret kingdom thrived in peace. But when outsiders stumbled upon its borders, the kingdom's ancient secrets began to surface.",
    "dragon": "The dragon’s fire scorched the earth, and the kingdom was on the verge of collapse. But one hero, armed with courage, set out to defeat the beast and restore peace.",
    "city": "The last city on Earth stood under a protective dome, its citizens unaware of the dangers lurking outside. But one curious soul decided to find out what lay beyond the barrier.",
    "pirate": "Captain Blackbeard's map led to a treasure like no other. But as his crew sailed the seas, they discovered that the true prize lay not in gold, but in the perilous journey itself.",
    "ghost": "At the opera house, a mysterious presence seemed to control the fates of those who performed. It was a story that would be told for generations to come.",
    "pharaoh": "Deep in the sands of Egypt, the tomb of an ancient pharaoh was unearthed. But the treasure hunters soon realized that the true treasure was not gold, but a curse that would follow them forever.",
    "forest": "The whispering forest called to those who dared enter, its secrets hidden behind thick trees and dense mist. No one ever returned the same once they passed through its gates.",
    "journey": "The long and winding road ahead beckoned the traveler. Each step they took brought them closer to a destiny they could not yet comprehend.",
    "castle": "High upon the cliffs stood the ancient castle, its towering walls hiding secrets of lost kingdoms, treasures, and untold mysteries.",
    "witch": "In the dark forest, a powerful witch cast spells that could change the fate of kingdoms. But her magic came at a cost—one that few dared to pay.",
    "magic": "Magic flowed through the air like a living thing, and in this world, those who controlled it could shape the very fabric of reality itself.",
    "treasure": "The treasure was rumored to be hidden beneath the ocean’s depths, but finding it would require more than just bravery—it would demand everything the crew had.",
    "adventure": "The explorers set out on a grand adventure, unsure of the dangers they would face, but knowing that they would be forever changed by the journey.",
    "legend": "The legend of the great hero was passed down through generations, a tale of courage, sacrifice, and a victory that changed the course of history.",
    "mystery": "A strange figure appeared in town, bringing with it a mystery that no one could solve. As the days passed, the answers seemed just out of reach.",
    "revenge": "Consumed by rage, the warrior set off on a quest for revenge, determined to bring justice to those who wronged them, no matter the cost.",
    "betrayal": "The knight’s trust was shattered when the king betrayed him. Now, he must choose between loyalty and justice in a land torn by treachery.",
    "peace": "In a land torn by war, the prince vowed to restore peace, not through violence, but by bringing people together in harmony and understanding.",
    "love": "Two souls, fated to meet, discovered a love that transcended time. But the forces that sought to tear them apart would stop at nothing to keep them apart.",
    "horror": "The darkness crept into every corner of the house, and the family soon realized that the horror they faced was not just in their minds.",
    "escape": "Trapped in a world of illusions, the hero must find a way to escape, using wits, bravery, and the knowledge that nothing is as it seems.",
    "survival": "Alone on a deserted island, the survivor must face the elements, dangerous wildlife, and the constant battle for food and shelter.",
    "fate": "The seer gazed into the crystal ball, seeing the threads of fate intertwining. But she knew that sometimes, fate could be changed by a single choice.",
    "curse": "The ancient curse had plagued the village for centuries, and the only way to lift it was to uncover the long-lost secret hidden in the heart of the forest.",
    "king": "The young king was forced to make difficult choices that would shape the future of his kingdom. But his heart told him that true leadership came from within.",
    "princess": "The princess was not content to sit in a tower and wait for rescue. She was determined to break free from the constraints of royalty and chart her own path.",
    "assassin": "The assassin, known for their deadly skills, was hired for a job that seemed simple. But as the mission unfolded, the assassin realized it was more than just a contract.",
    "knight": "The knight, sworn to protect the kingdom, faced his greatest challenge yet when he was called to defend the realm against a dark force from beyond the walls.",
    "warrior": "The warrior’s blade had tasted the blood of many foes. But when the final battle arrived, they were faced with a choice that could alter the future of the land.",
    "destiny": "Destiny had led them on a path filled with challenges, but the time had come to face the final trial, where the future of the world would be decided.",
    "revolution": "The oppressed people rose up against their rulers in a revolution that would change the balance of power forever. But every revolution came at a cost.",
    "savior": "The savior arrived when the world seemed lost, a hero who carried the hopes and dreams of the people. But could they live up to the expectations placed upon them?",
    "trial": "The trial was set, and the hero must face three impossible challenges. The fate of the kingdom rested in their hands, but the path to victory was unclear.",
    "darkness": "The darkness spread across the land, consuming everything in its path. Only the brave dared to face it, knowing that they might not return.",
    "light": "In a world consumed by darkness, the light shone brighter than ever. It was the hope that would guide the lost back to safety, no matter the dangers that lurked ahead.",
    "rebirth": "The world was destroyed, but from the ashes, a new civilization arose. It was a rebirth of hope, where the mistakes of the past could be left behind.",
    "eternity": "Eternity stretched out before them, an endless expanse that could never be fully understood. But they knew that in eternity, anything was possible.",
    "doom": "The end was near, and the hero must make a choice. Would they fight to the last, or would they embrace the doom that was prophesied for them?",
    "wanderer": "The wanderer traveled from town to town, searching for meaning in a world that seemed indifferent to their existence. But every journey brought new lessons.",
    "storm": "The storm raged across the sea, and the ship was caught in its fury. But the crew was determined to weather the storm and continue their voyage.",
  };

  // Return a story based on the provided name or a default message
  return stories[storyName] || "Sorry, I don't know that story. Please try another one!";
}

// Allow pressing Enter to send the story request
document.getElementById('user-input').addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendStoryRequest();
  }
});