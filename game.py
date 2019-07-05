from tkinter import *

#if __name__=="__init__":

def genBoard():
    pass

root = Tk()
root.resizable(False, False)

size = 800
c = Canvas(root, width=size, height=size)
c.pack()

offset = 100
tileSize = (size-2*offset)/8
for i in range(0, 8):
    for j in range(0, 8):
        if (i+j)%2==0:
            c.create_rectangle(offset+i*tileSize, offset+j*tileSize,
            offset+(i+1)*tileSize, offset+(j+1)*tileSize, fill="black")
        else:
            c.create_rectangle(offset+i*tileSize, offset+j*tileSize,
            offset+(i+1)*tileSize, offset+(j+1)*tileSize)

mainloop()
