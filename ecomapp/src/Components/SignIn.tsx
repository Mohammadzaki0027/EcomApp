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
}
export default function SignIn() {
  const[password,setPassword]=React.useState(true)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const handleTogglePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
event.stopPropagation()
    setPassword((password) => !password);
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate: (values) => {
      const errors: errorstype = {};

      if (!values.password) {
        errors.password = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
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
            marginTop: ".5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "100px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
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
                label="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                type={password?"password":"text"}
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
            <Button  sx={{ mt: 1, mb: 1, width: "50%" }}  type="button" onClick={handleTogglePassword}>
             { password?"Show Password":"Hide Password"}
            </Button>
            <Grid container gap={2}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* Google Sign In start Here */}

            <Box
              component="button"
              sx={{
                width: "100%",
                border: "1px solid red",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
                padding: ".5rem",
                backgroundColor: "white",
                borderRadius: "1rem",
                alignItems: "center",
              }}
            ></Box>
          </Box>
          {/* Google SignIn End Here */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
