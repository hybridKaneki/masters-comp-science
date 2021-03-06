import random as rd


class ShuffleDecks():
    "Class for defining shuffleDecks"
    cardRanks = ["Jack", "Queen", "King",
                 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    cardType = ['Spade', 'Diamond', 'Hearts', 'Club']
    shuffleList = []

    def __init__(self):
        "Constructor initialized // Calling function"
        print('Kautilya Init')
        self.properShuffle()

    def retShuffle(self):
        "Created a function for Returning Shuffle"
        return (str(self.cardRanks[rd.randint(0, len(self.cardRanks)-1)]) + " of " + str(self.cardType[rd.randint(0, len(self.cardType)-1)]))

    def callShuffleN(self, numberT):
        "function called depending on n number of times."
        for _ in range(numberT):
            print(self.retShuffle())

    def properShuffle(self):
        "Shuffle for real"
        print('Kautilya properShuffle')
        for x in self.cardRanks:
            for y in self.cardType:
                self.shuffleList.append(x+" of " + y)
        rd.shuffle(self.shuffleList)


# ShuffleDecks()

# Printing whole list
for card in ShuffleDecks.shuffleList:
    print(card)


# Different types of invocations
# Calling Shuffle n times
ShuffleDecks().callShuffleN(1)
