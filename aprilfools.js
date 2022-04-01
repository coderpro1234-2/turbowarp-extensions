class aprilfools {
  getInfo() {
    return {
    	color1: '#ED4242',
			color2: '#CA2B2B',
      id: "aprilfools",
      name: 'April Fools',
      blocks: [
        {
          opcode: '2022',
          blockType: Scratch.BlockType.COMMAND,
          text: 'travel to[year]',
          arguments: {
            year: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2022'
            }
          }
        }
      ]
    };
  }
}

Scratch.extensions.register(new aprilfools());