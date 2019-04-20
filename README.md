# Warsaw's Real Estate Price Prediction Neural Network
*by Michal Wrzosek from Wrzosek Real Estate Agency*

This repository keeps in one place files used to scrape real estate data, analyze data, create a prediction model and simple web app to serve as a simple website where you can interact with the model.

Stack:
- Python
- Scikit Learn
- Jupyter Notebook
- Node.js
- Flask

[Model Development Notebook](jupyter-notebook/dataOnMap.ipynb)

## Building a Neural Network
In order to build my own network I was following mostly those resources.

Links:
- [GitHub](https://github.com/cloudxlab/ml/blob/master/machine_learning/end_to_end_project.ipynb)
- [YouTube](https://www.youtube.com/watch?v=_zZFm90AwDs&list=PLFhNzVKP1pVrNU8cTL_t-8YzPLF8i8PaS&index=11)


## Docker image
We're using Jupyter Notebook + Tensorflow & Keras image: `tensorflow-notebook:5ed91e8e3249`
Based on this image we're building our image where we're adding some more useful packages.

To build: `npm run build`
To start: `npm run start`

Navigate to `http://localhost:8888` and paste `token` that was printed in your console.

Links:
- https://github.com/jupyter/docker-stacks
- https://github.com/jupyter-widgets/ipyleaflet
- https://ipyleaflet.readthedocs.io/en/latest/
