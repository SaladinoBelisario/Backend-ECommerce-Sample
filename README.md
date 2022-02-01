# **`Backend project for the MEAN Fullstack E-Shop`**

# **How to use it?**

1. You can use the Backend as standalone, you only need to provide a path for the Environment 
configuration file, the easiest way is to clone the repository and in the same folder put
a _**.env file**_

> _Example .env file_
> 
> API_URL=your/base/api/url
> 
> DB_NAME=YOUR_DB_NAME
> 
> DB_USER=DB_SAMPLE_USER
> 
> DB_PWD=DB_SAMPLE_PASSWORD
> 
> JWT_SECRET=yourSecret

2. You can test the DB in the _port 3000 of the localhost_

If you want to deploy the whole project refer to [ECommerce](https://github.com/SaladinoBelisario/E-Commerce_Sample)

# **How to deploy?**

If you want to deploy the DB to a server you can use the provided _Docker files under ./mongo/_
to create an image with Node and MongoDB, then deploy your data to your database in your own VPS
or you can use _MondoDB Atlas service_.

# **Sample Data**

The folder _./database_ contains the default models and data that you can use to test the project.

The _./public_ folder contains the sample dataset of images for the DB to use in the frontend, beware
that **this folder is under Git LFS system**, so you need to explicit indicate to Git that you want to 
fetch the data in it.