from tkinter import *

#if __name__=="__init__":

def genBoard():
    pass

root = Tk()

size = 800
c = Canvas(root, width=size, height=size)
c.pack()

tileSize = size/8
for i in range(0, 8):
    for j in range(0, 8):
        c.create_rectangle(i*tileSize, j*tileSize, (i+1)*tileSize, (j+1)*tileSize)

mainloop()
