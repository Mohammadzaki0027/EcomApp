import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import "../App.css";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
interface errorstype {
  password?: string;
  email?: string;
  name?: string;
  mobilenumber?: string;
}
export default function SignUpComponent() {
  const [password, setPassword] = React.useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const handleTogglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setPassword((password) => !password);
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      mobilenumber: "",
      name: "",
    },
    validate: (values) => {
      const errors: errorstype = {};

      if (!values.password) {
        errors.password = "Required";
      }

      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.mobilenumber) {
        errors.mobilenumber = "Required";
      } else if (!/^\d{10}$/i.test(values.mobilenumber)) {
        errors.mobilenumber = "Invalid mobile number (must be 10 digits)";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: ".2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "50px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box sx={{ mt: .5 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                id="name"
                name="name"
      
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
               
                id="email"
                label="Email Address"
                autoComplete="email"
                name="email"
              onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <TextField
                fullWidth
                margin="normal"
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                type={password ? "password" : "text"}
              />
              <TextField
                margin="normal"
                required
                fullWidth
              
                id="mobilenumber"
                label="Mobile Number"
                autoComplete="mobile"
                name="mobilenumber"
                onBlur={formik.handleBlur}
                value={formik.values.mobilenumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.mobilenumber &&
                  Boolean(formik.errors.mobilenumber)
                }
                helperText={
                  formik.touched.mobilenumber && formik.errors.mobilenumber
                }
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
          
            <Grid container gap={1} sx={{justifyContent:"space-between",alignItems:"center"}}>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Sign In"}
                </Link>
             
              </Grid>
              <Grid >
              <Button
              sx={{ mt: 1, mb: 1, width: "100%" }}
              type="button"
              onClick={handleTogglePassword}
              disabled={formik.values.password.length===0}
            >
              {password ? "Show Password" : "Hide Password"}
            </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
