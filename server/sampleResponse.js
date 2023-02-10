function sampleResponse() {
  return {
    id: "cmpl-GERzeJQ4lvqPk8SkZu4XMIuR",
    object: "text_completion",
    created: 1586839808,
    model: "text-davinci:003",
    choices: [
      {
        // text: "\n\nThis is indeed a test",
        text: "\n\nZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby",
        index: 0,
        logprobs: null,
        finish_reason: "length",
      },
    ],
    usage: {
      prompt_tokens: 5,
      completion_tokens: 7,
      total_tokens: 12,
    },
  };
}
exports.sampleResponse = sampleResponse;
