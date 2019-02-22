-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(255) UNIQUE,
--     email VARCHAR(255) UNIQUE,
--     created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE exercises (
--     exse_type VARCHAR(255),
--     exse_name VARCHAR(255),
--     PRIMARY KEY(exse_type, exse_name)
-- );


CREATE TABLE logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reps INT NOT NULL DEFAULT 0,
    weight INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    -- user_id INT NOT NULL, PROVIDED BY SESSION AFTER LOGGING IN 
    exse_type_ref VARCHAR(255) NOT NULL,
    exse_name_ref VARCHAR(255) NOT NULL,
    -- FOREIGN KEY(user_id) REFERENCES users(id), PROVIDED BY SESSION AFTER LOGGING IN 
    -- COMPOSITE FOREIGN KEY
    FOREIGN KEY(exse_type_ref, exse_name_ref) REFERENCES exercises(exse_type, exse_name)
);












